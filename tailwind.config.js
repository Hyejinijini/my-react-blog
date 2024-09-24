/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        customWhite: '#F7F7F7', // 밝은 회색 (거의 흰색)
        customGrayLight: '#D1D1D1', // 중간 회색
        customGrayMuted: '#B0B0B0', // 차분한 회색
        customGrayMid: '#5C5C5C', // 중간 회색
        customGray: '#262626', // 어두운 회색
        customGrayDark: '#3D3D3D', // 다크 그레이
        customRoseLight: '#F5C2C7', // 연한 로즈
        customRoseMid: '#EB8A95', // 중간 로즈
        customRoseMuted: '#D76879', // 차분한 로즈
        customRoseDark: '#C1495D', // 진한 로즈
        customRoseDeep: '#A93548' // 깊은 로즈
      }
    }
  },
  plugins: []
}
