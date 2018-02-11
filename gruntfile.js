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
      dist: {
        files: {
          'index.php' : 'views/index.ejs'
        }
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['*.css', '!*.min.css'],
          dest: 'public/stylesheets',
          ext: '.min.css'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-ejs');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  
  grunt.registerTask('default', ['watch', 'sass', 'ejs', 'cssmin']);
};