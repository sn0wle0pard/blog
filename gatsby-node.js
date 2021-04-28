const path = require('path')

const srcDirectory = path.resolve(__dirname, 'src')

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const relativePath = path.relative(srcDirectory, node.fileAbsolutePath)
    const category = relativePath.split('/').shift()
    createNodeField({
      node,
      name: 'category',
      value: category,
    })
  }
}
