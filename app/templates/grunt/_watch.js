// Watches files for changes and runs tasks based on the changed files
module.exports = {
    bower: {
        files: ['bower.json'],
        tasks: ['bower']
    },
    js: {
        files: ['<%= config.app %>/src/**/**.js'],
        tasks: ['jscs', 'eslint'],
        options: {
            livereload: true
        }
    },
    gruntfile: {
        files: ['Gruntfile.js']
    },
    css: {
        files: ['<%= config.app %>/css/{,*/}*.css'],
        options: {
            livereload: true
        }
    },
    livereload: {
        options: {
            livereload: '<%= connect.options.livereload %>'
        },
    files: [
        '<%= config.app %>/{,*/}*.html',
        '<%= config.app %>/styles/**/**.css',
        '<%= config.app %>/images/{,*/}*'
        ]
    }
};
