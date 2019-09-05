module.exports = (grunt) => {
  grunt.initConfig({
    aws: grunt.file.readJSON('config/aws-keys.json'),

    aws_s3: {
      options: {
        accessKeyId: '<%= aws.AWSAccessKeyId %>',
        secretAccessKey: '<%= aws.AWSSecretKey %>'
      },
      dist: {
        options: {
          bucket: 'bullseye-assets',
          overwrite: true
        },
        files: [
          {
            expand: true,
            cwd: './public/styles',
            src: 'proxyStyles.css',
            rename: function() {
              return 'proxyStyles.css'
            }
          },
          {
            expand: true,
            cwd: '../item-checkout/public',
            src: 'app.bundle.js',
            rename: function() {
              return 'checkout.bundle.js'
            }
          },
          {
            expand: true,
            cwd: '../item-details/client/dist',
            src: 'bundle.js',
            rename: function() {
              return 'details.bundle.js'
            }
          },
          {
            expand: true,
            cwd: '../item-details/client/dist',
            src: 'styles.css',
            rename: function() {
              return 'styles.css'
            }
          },
          {
            expand: true,
            cwd: '../item-reviews/client/dist',
            src: 'bundle.js',
            rename: function() {
              return 'reviews.bundle.js'
            }
          },
          {
            expand: true,
            cwd: '../item-reviews/client/dist',
            src: 'reviews.css',
            rename: function() {
              return 'reviews.css'
            }
          }
        ]
      }
    }
  });
  grunt.loadNpmTasks('grunt-aws-s3');
  grunt.registerTask( 'default', 'aws_s3:dist');
}