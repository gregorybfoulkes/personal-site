hexo.extend.generator.register('blank-empty-index', function (locals) {
  if (locals.posts.length > 0) return [];

  return {
    path: 'index.html',
    layout: 'index',
    data: {
      __index: true,
      posts: locals.posts,
      current: 1,
      total: 1
    }
  };
});

hexo.extend.generator.register('blank-empty-archive', function (locals) {
  if (locals.posts.length > 0) return [];

  return {
    path: 'archives/index.html',
    layout: 'archive',
    data: {
      archive: true,
      posts: locals.posts,
      current: 1,
      total: 1
    }
  };
});
