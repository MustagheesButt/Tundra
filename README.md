## Getting Started

### Frontend
1. `npm install`

    To install dependencies.

2. `npm run dev`

    To run development server.

### Backend

On backend we use WordPress. Following plugins need to be installed:
- [WP GraphQL](https://github.com/wp-graphql/wp-graphql)
- [WP GraphQL WooCommerce](https://github.com/wp-graphql/wp-graphql-woocommerce)
- [WP GraphQL JWT Authentication](https://github.com/wp-graphql/wp-graphql-jwt-authentication)

After that, define JWT secret key in `wp-config.php` like so,

`define( 'GRAPHQL_JWT_AUTH_SECRET_KEY', 'your-secret-token' );`


Then set the proper values in `lib/constants.js`

You might need to install libpng

`apt/brew install libpng`
