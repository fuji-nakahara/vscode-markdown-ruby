function activate() {
    return {
        extendMarkdownIt(md) {
            return md.use(require('markdown-it-ruby'));
        }
    };
}
exports.activate = activate;
