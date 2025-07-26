uniform float u_time;
uniform vec2 u_resolution;

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution.xy;
  float color = 0.0;
  color += sin(st.x * 10.0 + u_time) * 0.5;
  color += sin(st.y * 10.0 + u_time) * 0.5;
  gl_FragColor = vec4(vec3(color), 1.0);
}