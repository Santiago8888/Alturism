exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
    if (page.path.match(/^\/edit/)){
      page.matchPath = "/edit/*"
      createPage(page)
    } else if(page.path.match(/^\/delete/)){
        page.matchPath = "/delete/*"
        createPage(page)
    } else if(page.path.match(/^\/org/)){
        page.matchPath = "/org/*"
        createPage(page)
    }
}
