module.exports = {
    plugins: [
      {
        resolve: `gatsby-plugin-prefetch-google-fonts`,
        options: {
          fonts: [
            {
              family: `Playfair Display SC`,
              variants: [`400`],
            },
            {
              family: `Raleway`,
              variants: [`300`, `300i`, `400`, `600`]
            },
          ],
        },
      }
    ]
  }