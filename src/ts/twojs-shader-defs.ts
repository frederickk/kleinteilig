export const shader = {
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
    precision mediump float;

    uniform sampler2D u_image;
    varying vec2 v_textureCoords;

    void main() {
      vec4 texel = texture2D(u_image, v_textureCoords);
      vec4 color = vec4(v_textureCoords.x, v_textureCoords.y, 1.0, 1.0);
		  gl_FragColor = mix(texel, color, texel.a);
    }
  `,
};