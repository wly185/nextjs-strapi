module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '156236196f9e6b027ab3e820add1656d'),
  },
});
