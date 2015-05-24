module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-shell');

    grunt.initConfig({
        /* for live reload, select which files to watch */
        watch: {
            livereload: {
                files: ['coffee/**/*.coffee',
                        'views/**/*.jade',
                        'public/**/*.css'
                ],
                options: { livereload: true },
            },
            coffee: {
                files: ['coffee/**/*.coffee'],
                tasks: ['coffee:compile']
            },
            jade: {
                files: ['views/**/*.jade'],
                tasks: ['jade:compile']
            },
            stylus: {
                files: ['./**/*.styl'],
                tasks: ['stylus:compile']
            }
        },
        /* select jade files to compile */
        jade: {
            compile: {
                options: {
                    pretty: true
                },
                files: [{
                    expand: true,
                    cwd: "views/",
                    src: ['**/partials/*.jade'],
                    dest: './public/',
                    ext: '.html'
                }]
            }
        },
        /* compile stylus */
        stylus: {
            compile: {
                options : {
                    compress: true
                },
                files: {
                    './public/stylus/style.css': './public/stylus/style.styl'
                }
            }
        }
    });

    grunt.registerTask('build', ['jade'])
};
