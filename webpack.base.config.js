
module.exports = {
  module: {
    rules: [
      {
        test: /\.md$/,
        loader: 'vue-markdown-loader',
        options: {
          preprocess: function (MarkdownIt, Source) {
            MarkdownIt.renderer.rules.table_open = function () {
              return '<div class="table-container"><table class="table">';
            };
            MarkdownIt.renderer.rules.table_close = function () {
              return '</table></div>';
            };
            return Source;
          }
        }
      }
    ]
  }
}