export const textureBlob = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQAAAABazTCJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAAxJREFUeAFjdGBsAAABSgDDZcqZPAAAAABJRU5ErkJggg==';
export const shader = {
  title: 'Dithering',
  vertex: `
    attribute vec2 a_position;
    attribute vec2 a_texCoord;
    varying vec2 v_texCoord;

    void main() {
      gl_Position = vec4(vec2(2.0, 2.0) * a_position - vec2(1.0, 1.0), 0.5, 1.0);
      v_texCoord = a_texCoord;
    }
  `,
  fragment: `
    precision mediump float;
    uniform sampler2D u_image;
    uniform sampler2D u_bayer;
    uniform vec3 u_resolution;
    varying vec2 v_texCoord;

    void main() {
      float pixel_size = 5.;

      vec4 res;
      res.xy = vec2(pixel_size);
      res.zw = vec2(res.y * u_resolution.x / u_resolution.y, res.y);

      vec2 uv = gl_FragCoord.xy / u_resolution.xy;
      vec2 area = res.xy;
      vec2 q = floor(gl_FragCoord.xy / area) * area / u_resolution.xy;

      vec3 tex = texture2D(u_image, uv).rgb;
      float num = texture2D(u_bayer,
          gl_FragCoord.xy / (8. * res.xy)).r * (1. - 40. / u_resolution.x) + 24. / u_resolution.x;
      float tex_avg = dot(tex.rgb, vec3(0.2126, 0.7152, 0.0722));

      vec3 col;
      col = floor(vec3(tex_avg) / num);

      gl_FragColor = vec4(col, 1.0);
    }
  `,
  properties: {
    u_resolution: {
      type: 'uniform',
      value: [document.body.clientWidth, document.body.clientHeight, 1.0],
    },
  },
  inputs: ['u_image', 'u_bayer'],
};