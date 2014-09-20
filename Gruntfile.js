module.exports = function(grunt){

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      jekyll: {                             // Task
        options: {
          watch: false,
        },
        server: {                            // Another target
          options: {
            serve: true,
            watch: true,
          }
        },
        build: {
            options: {
              serve: false,
              watch: false,
            }
        }
      },
      watch: {
        options: {
          livreload: true,
        },
        jekyll: {
          files: ['*.md', 'index.html','_*/**', '_config.yml'],
          tasks: ['jekyll:build'],
        },
        css: {
          files: ['static/sass/*.scss'],
          tasks: ['build'],
        }
      },
      reload: {
        port: 4000,
        host: '0.0.0.0',
        liveReload: {},
      },
      compass: {
        options: {
          sassDir: 'static/sass',
          cssDir: 'static/stylesheets',
          outputStyle: 'expanded',
        },
        prod: {
          options: {
            outputStyle: 'compressed',
            environment: 'production',
            watch: false,
          },
        }
      },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-jekyll');
    
    // run 'grunt serve' to compile static sass files, build, 
    // and run server, while watching for changes in jekyll fies 
    grunt.registerTask('serve', ['compass:prod','jekyll:server']);
    // run 'grunt build' to compile all static/sass/* files to 
    // static/styleheets/*.css and then build jekyll static site
    grunt.registerTask('build', ['compass:prod', 'jekyll:build']);

    grunt.registerTask('default', ['build']);

};
