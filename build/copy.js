module.exports = {
    all: {
        files: [
            { expand: true, src: ['javascript.json'], dest: global.dist },
            { expand: true, src: ['index.html'], dest: global.dist },
            { expand: true, src: ['404.html'], dest: global.dist },
            { expand: true, src: ['sitemap.xml'], dest: global.dist },
            { expand: true, cwd: 'src/config/', src: ['**'], dest: global.dist + '/config/' },
            { expand: true, cwd: 'src/images/', src: ['**'], dest: global.dist + '/images/', },
            { expand: true, cwd: 'src/download/', src: ['**'], dest: global.dist + '/download/' },
            { expand: true, cwd: 'src/css/external/jquery-ui-custom-theme/images/', src: ['**'], dest: global.dist + '/css/images' },
            { expand: true, cwd: 'src/css/external/jquery-ui-custom-theme/', src: ['*.css'], dest: global.dist + '/css/' },
            { expand: true, cwd: 'src/javascript/', src: ['**'], dest: global.dist + '/dev/src/javascript/' },
        ]
    }
};
