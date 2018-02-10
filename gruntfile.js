module.exports = function(grunt) {
  grunt.initConfig ({

    watch: {
      source: {
        files: ['sass/**/*.scss', 'views/**/*.ejs'],
        tasks: ['sass', 'ejs']
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'public/stylesheets/styles.css' : 'sass/styles.scss'
        }
      }
    },

    ejs: {
      all: {
        files: {
          'index.php' : 'views/index.ejs'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-ejs');
  
  grunt.registerTask('default', ['watch', 'sass', 'ejs']);
};