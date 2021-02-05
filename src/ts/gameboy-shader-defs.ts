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
    precision mediump float;

    uniform sampler2D u_image;
    varying vec2 v_textureCoords;

    int indexMatrix4x4[16];

    // const vec3 palette[4] = vec3[](vec3(  8,  24,  32) / 255.,
    //                                vec3( 52, 104,  86) / 255.,
    //                                vec3(136, 192, 112) / 255.,
    //                                vec3(224, 248, 208) / 255.);

    float indexValue() {
      indexMatrix4x4[0] = 0;
      indexMatrix4x4[1] = 8;
      indexMatrix4x4[2] = 2;
      indexMatrix4x4[3] = 10;
      indexMatrix4x4[4] = 12;
      indexMatrix4x4[5] = 4;
      indexMatrix4x4[6] = 14;
      indexMatrix4x4[7] = 6;
      indexMatrix4x4[8] = 3;
      indexMatrix4x4[9] = 11;
      indexMatrix4x4[10] = 1;
      indexMatrix4x4[11] = 9;
      indexMatrix4x4[12] = 15;
      indexMatrix4x4[13] = 7;
      indexMatrix4x4[14] = 13;
      indexMatrix4x4[15] = 5;

      float x = mod(gl_FragCoord.x, 4.);
      float y = mod(gl_FragCoord.y, 4.);
      int index = int(x + y);

      // return float(indexMatrix4x4[index]);
      return 1.;
    }

    // int dither(float color) {
    //   int closestColor = (color < 0.5) ? 0 : 1;
    //   int secondClosestColor = 1 - closestColor;
    //   float d = indexValue();
    //   float distance = float(abs(float(closestColor) - float(color)));

    //   return (distance < d) ? closestColor : secondClosestColor;
    // }

    void main() {
      // vec3 iResolution = vec3(1139., 914., 1.);
      // vec4 res;
      // // res.xy = vec2(160, 144);
      // res.xy = vec2(80, 72);
      // res.zw = vec2(res.y * iResolution.x / iResolution.y, res.y);

      // vec2 uv = gl_FragCoord.xy / iResolution.xy;
      // uv = floor(uv * res.zw);

      // int value = 0;
      // if (abs(uv.x * 2. - res.z) < res.x) {
      //   float gray = dot(texture2D(u_image, uv / res.zw).rgb, vec3(0.2126, 0.7152, 0.0722));
      //   float d = vec4(vec3(dither(gray)), 1).r;
      //   value = int(floor(gray * 3. + d));
      // }

      // gl_FragColor = vec4(palette[int(value)], 1);
      gl_FragColor = vec4(1., 0, 0, 1.);
    }
  `,
};