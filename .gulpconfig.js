module.exports = {
    copy: {
        process: true,
        watch: true,
        logColor: 'cyan',
        areas: [
            {
                paths: {
                    src: [
                        './**/*',
                        '!./node_modules/**',
                        '!./vendor/phpunit/**',
                        '!./vendor/wp-coding-standards/**',
                        '!./vendor/dealerdirect/**'
                    ],
                    dest: './calendar-plus',
                }
            },
        ],
        pipes: {
            watch: {
                events: 'all',
            },
        }
    }
}