export const textureBlob = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQAAAABazTCJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAAxJREFUeAFjdGBsAAABSgDDZcqZPAAAAABJRU5ErkJggg==';
export const shader =  {
  vertex: `
    attribute vec2 a_position;
    attribute vec2 a_textureCoords;

    uniform mat3 u_matrix;
    uniform vec2 u_resolution;

    varying vec2 v_textureCoords;

    void main() {
      vec2 projected = (u_matrix * vec3(a_position, 1.0)).xy;
      vec2 normal = projected / u_resolution;
      vec2 clipspace = (normal * 2.0) - 1.0;

      gl_Position = vec4(clipspace * vec2(1.0, -1.0), 0.0, 1.0);
      v_textureCoords = a_textureCoords;
    }
  `,
  fragment: `
    #define MAX_LEVEL 4
    #define bayer2x2(a) (4 - (a).x - ((a).y << 1)) % 4

    precision mediump float;
    precision highp float;

    uniform sampler2D u_image;
    uniform vec2 u_resolution;
    varying vec2 v_textureCoords;

    mat4 bayerIndex = mat4(
      vec4(00.0/16.0, 12.0/16.0, 03.0/16.0, 15.0/16.0),
      vec4(08.0/16.0, 04.0/16.0, 11.0/16.0, 07.0/16.0),
      vec4(02.0/16.0, 14.0/16.0, 01.0/16.0, 13.0/16.0),
      vec4(10.0/16.0, 06.0/16.0, 09.0/16.0, 05.0/16.0));

    const int m = int(mod(float(gl_FragCoord.y), 4.));

    void main() {
      float pixel_size = 5.;

      vec4 res;
      res.xy = vec2(pixel_size);
      res.zw = vec2(res.y * u_resolution.x / u_resolution.y, res.y);

      vec2 uv = gl_FragCoord.xy / u_resolution.xy;
      vec2 area = res.xy;
      vec2 q = floor(gl_FragCoord.xy / area) * area / u_resolution.xy;

      vec3 tex = texture2D(u_image, uv).rgb;

      float bayerValue = bayerIndex[int(m)][int(m)];

      // fragColor = vec4(
      //     step(bayerValue,col.r),
      //     step(bayerValue,col.g),
      //     step(bayerValue,col.b),
      //     col.a);
      // }

      // float num = texture2D(u_bayer,
      //     gl_FragCoord.xy / (8. * res.xy)).r * (1. - 40. / u_resolution.x) + 24. / u_resolution.x;
      // //float tex_avg = (tex.r + tex.g + tex.b) / 3.;
      // float tex_avg = dot(tex.rgb, vec3(0.2126, 0.7152, 0.0722));

      // vec3 col;
      // col = floor(vec3(tex_avg) / num);
      // //col = mix(tex,floor(vec3(tex.r,0.0,0.5) / num),0.75); 	// Cyberpunk
      // //col = floor(vec3(0.85, tex_avg,1. - tex_avg) / num);		// Moiré
      // //col = floor(tex / num);									// normal?

      // gl_FragColor = vec4(col, 1.0);
      gl_FragColor = vec4(1., 0, 0, 1.);
    }

  `,
};