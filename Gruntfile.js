module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      sass_import: {
        dist:{
          files:{
            'sass/custom.scss': 'node_modules/bootstrap/scss/bootstrap.scss'
          }
        },
      },
      sass: {
        dist: {
          files: {
            'dist/css/custom.css': 'sass/*.scss',
          }
        }
      },
      concat: {
        options: {
          separator: ';',
        },
        dist: {
          src: ['js/vendor/jquery-3.3.1.min.js',
                'node_modules/bootstrap/dist/js/bootstrap.js',
          ],
          dest: 'js/main.js',
        },
      },
      watch: {
        files: ['sass/*.scss', 'js/main.js'],
        tasks: ['sass']
      },
      uglify: {
        options: {
          manage:false
        },
        my_target: {
          files: [{
            'js/main.min.js' : ['js/main.js']
          }]
        }
      },
      cssmin: {
        my_target: {
          files: [{
            expand:true,
            cwd: 'css/',
            src: ['*.css', '!*.min.css'],
            dest: 'css/',
            ext: '.min.css'
          }]
        }
      }
    });

    // Load modules.
    grunt.loadNpmTasks('grunt-sass-import');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Register tasks.
    grunt.registerTask('default', ['sass']);
    grunt.registerTask('default', ['cssmin']);
    grunt.registerTask('default', ["uglify", "cssmin"]) ;

  };