exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
    if (page.path.match(/edit/)){
      page.matchPath = "/admin/edit/*"
      createPage(page)
    } else if(page.path.match(/delete/)){
        page.matchPath = "/admin/delete/*"
        createPage(page)
    } else if(page.path.match(/org/)){
        page.matchPath = "/admin/org/*"
        createPage(page)
    }
}
