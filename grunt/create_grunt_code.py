
import pprint

files = """
collections.txt
models.txt
vendor.txt
views.txt
""".strip().split('\n')


def open_file(fpath):
    lines = [line.strip() for line in open(fpath,'r').readlines() if line.strip()]
    lines = ['app/MyApp/{}'.format(l) for l in lines]
    return lines



def create_grunt_task(javascript_files, task_name, destination):
    res = open_file(javascript_files)

#    src = pprint.pformat(res,indent=8)
    src = res
    template = """
        %s: {
        src: %s,
        dest: '%s'
        }"""

    return template % ( task_name, src, destination)


if __name__ == '__main__':

    template = """
    module.exports = function(grunt) {

        grunt.initConfig({
            concat: {
                options: {
                    separator: ';'
                },

    """
    print template

    print create_grunt_task('views.txt','concat_views','app/MyApp/grunt/views.js')
    print ","
    print create_grunt_task('models.txt','concat_models','app/MyApp/grunt/models.js')
    print ","
    print create_grunt_task('vendor.txt','concat_vendor','app/MyApp/grunt/vendor.js')
    print ","
    print create_grunt_task('collections.txt','concat_collections','app/MyApp/grunt/collections.js')


print """

        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
//    grunt.registerTask('default', ['uglify:buildCommModels']);
    grunt.registerTask('default', [
    'concat:concat_views',
    'concat:concat_models',
    'concat:concat_vendor',
    'concat:concat_collections'
    ]);
};
"""
