/**
 * Configure copying tasks into dist version
 */
module.exports = {
    dist: {
        files: [
            {
                expand: true,
                cwd: 'public',
                src: [
                    'index.html',
                    'polymer-loader.vulcanized.html',
                    'images/*',
                    'sample-data/*',
                    'views/*',
		    'components/css/*',
		    'components/js/*',
                    'bower_components/webcomponentsjs/webcomponents-lite.js',
                    'bower_components/px/dist/px.min.js',
                    'bower_components/es6-promise/dist/es6-promise.min.js',
                    'bower_components/requirejs/require.js',
                    'bower_components/font-awesome/fonts/*',
		    'bower_components/jquery/dist/jquery.min.js',
		    'bower_components/es6-promise/es6-promise.min.js',
		    'components/Zoom-In-Out/ZoomPlugin/libs/jquery/jquery-ui.js',
		    'bower_components/list.js/dist/*',
		    'bower_components/list.pagination.js/dist/list.pagination.min.js',
		    'bower_components/list.fuzzysearch.js/dist/list.fuzzysearch.min.js',
                    'bower_components/px-typography-design/type/*',
		    'bower_components/bootstrap/*/*/*'
                ],
                dest: 'dist/www/'
            }
        ]
    },
    serve: {
        files: [
            {
                expand: true,
                cwd: 'public',
                src: ['polymer-loader.html'],
                rename: function (src, dest) {
                    return 'public/polymer-loader.vulcanized.html';
                }
            }
        ]
    }
};
