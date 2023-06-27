/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        RobotoMedium: "Roboto-Medium, sans-serif",
        RobotoBold: "Roboto-Bold, sans-serif",
        RobotoRegular: "Roboto-Regular, sans-serif",
        PoppinsMedium: "Poppins-Medium, sans-serif",
        PoppinsRegular: "Poppins-Regular, sans-serif",
        PoppinsBold: "Poppins-Bold, sans-serif",
        PoppinsSemiBold: "Poppins-SemiBold, sans-serif",
        RobotoMedium: "Roboto-Medium, sans-serif",
        RobotoBold: "Roboto-Bold, sans-serif",
        RobotoRegular: "Roboto-Regular, sans-serif",
      }
    },
  },
  plugins: [],
}
