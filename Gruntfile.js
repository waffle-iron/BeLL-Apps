module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        //pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                separator: ';'
            },
            //Concatenating the Community files here
            concat_views: {
                src: ['app/MyApp/app/views/*.js'],
                dest: 'release/MyApp/app/views/combined.js'
            },
            distCommViews: {
                src: ['release/app/MyApp/app/views/*.js'],
                dest: 'temp/app/MyApp/app/combined_views.js'
            },
            distCommModels: {
                src: ['release/app/MyApp/app/models/*.js'],
                dest: 'temp/app/MyApp/app/combined_models.js'
            },
            distCommCollections: {
                src: ['release/app/MyApp/app/collections/*.js'],
                dest: 'temp/app/MyApp/app/combined_collections.js'
            },
            //End Community Concatenation
            //Concatenating the Nation files here
            distNationViews: {
                src: ['release/app/nation/app/views/*.js'],
                dest: 'temp/app/nation/app/combined_views.js'
            },
            distNationModels: {
                src: ['release/app/nation/app/models/*.js'],
                dest: 'temp/app/nation/app/combined_models.js'
            },
            distNationCollections: {
                src: ['release/app/nation/app/collections/*.js'],
                dest: 'temp/app/nation/app/combined_collections.js'
            }
            //End Nation Concatenation
        },

        uglify: {
            //Minifying Community files here
            buildCommViews: {
                src: 'temp/app/MyApp/app/combined_views.js',
                dest: 'production/app/MyApp/app/combined_views_min.js'
            },
            buildCommModels: {
                src: 'temp/app/MyApp/app/combined_models.js',
                dest: 'production/app/MyApp/app/combined_models_min.js'
            },
            buildCommCollections: {
                src: 'temp/app/MyApp/app/combined_collections.js',
                dest: 'production/app/MyApp/app/combined_collections_min.js'
            },
            buildCommApp: {
                src: 'release/app/MyApp/app/App.js',
                dest: 'production/app/MyApp/app/App_min.js'
            },
            buildCommRouter: {
                src: 'release/app/MyApp/app/Router.js',
                dest: 'production/app/MyApp/app/Router_min.js'
            },
            buildCommIndexFile: {
                src: 'release/app/MyApp/indexFile.js',
                dest: 'production/app/MyApp/indexFile_min.js'
            },
            //End Community Minification
            //Minifying Nation files here
            buildNationViews: {
                src: 'temp/app/nation/app/combined_views.js',
                dest: 'production/app/nation/app/combined_views_min.js'
            },
            buildNationModels: {
                src: 'temp/app/nation/app/combined_models.js',
                dest: 'production/app/nation/app/combined_models_min.js'
            },
            buildNationCollections: {
                src: 'temp/app/nation/app/combined_collections.js',
                dest: 'production/app/nation/app/combined_collections_min.js'
            },
            buildNationApp: {
                src: 'release/app/nation/app/App.js',
                dest: 'production/app/nation/app/App_min.js'
            },
            buildNationRouter: {
                src: 'release/app/nation/app/Router.js',
                dest: 'production/app/nation/app/Router_min.js'
            }
            //End Nation Minification
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
//    grunt.registerTask('default', ['uglify:buildCommModels']);
    grunt.registerTask('default', ['concat:concat_views']);

    // Default task(s).
//    grunt.registerTask('default', ['concat:distCommViews', 'concat:distCommModels', 'concat:distCommCollections',
//        'concat:distNationViews', 'concat:distNationModels', 'concat:distNationCollections',
//        'uglify:buildCommViews', 'uglify:buildCommModels', 'uglify:buildCommCollections',
//        'uglify:buildCommApp', 'uglify:buildCommRouter', 'uglify:buildCommIndexFile',
//        'uglify:buildNationViews', 'uglify:buildNationModels', 'uglify:buildNationCollections',
//        'uglify:buildNationApp', 'uglify:buildNationRouter']);

};
