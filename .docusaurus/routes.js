import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/documentacion-DSI/__docusaurus/debug',
    component: ComponentCreator('/documentacion-DSI/__docusaurus/debug', '3cb'),
    exact: true
  },
  {
    path: '/documentacion-DSI/__docusaurus/debug/config',
    component: ComponentCreator('/documentacion-DSI/__docusaurus/debug/config', 'f9c'),
    exact: true
  },
  {
    path: '/documentacion-DSI/__docusaurus/debug/content',
    component: ComponentCreator('/documentacion-DSI/__docusaurus/debug/content', '370'),
    exact: true
  },
  {
    path: '/documentacion-DSI/__docusaurus/debug/globalData',
    component: ComponentCreator('/documentacion-DSI/__docusaurus/debug/globalData', '0cc'),
    exact: true
  },
  {
    path: '/documentacion-DSI/__docusaurus/debug/metadata',
    component: ComponentCreator('/documentacion-DSI/__docusaurus/debug/metadata', '016'),
    exact: true
  },
  {
    path: '/documentacion-DSI/__docusaurus/debug/registry',
    component: ComponentCreator('/documentacion-DSI/__docusaurus/debug/registry', '4ac'),
    exact: true
  },
  {
    path: '/documentacion-DSI/__docusaurus/debug/routes',
    component: ComponentCreator('/documentacion-DSI/__docusaurus/debug/routes', '2b2'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog',
    component: ComponentCreator('/documentacion-DSI/blog', 'a74'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/archive',
    component: ComponentCreator('/documentacion-DSI/blog/archive', '61c'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/first-blog-post',
    component: ComponentCreator('/documentacion-DSI/blog/first-blog-post', '576'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/long-blog-post',
    component: ComponentCreator('/documentacion-DSI/blog/long-blog-post', '0ba'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/mdx-blog-post',
    component: ComponentCreator('/documentacion-DSI/blog/mdx-blog-post', '250'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/tags',
    component: ComponentCreator('/documentacion-DSI/blog/tags', 'b67'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/tags/docusaurus',
    component: ComponentCreator('/documentacion-DSI/blog/tags/docusaurus', '102'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/tags/facebook',
    component: ComponentCreator('/documentacion-DSI/blog/tags/facebook', 'b71'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/tags/hello',
    component: ComponentCreator('/documentacion-DSI/blog/tags/hello', 'dab'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/tags/hola',
    component: ComponentCreator('/documentacion-DSI/blog/tags/hola', '3ac'),
    exact: true
  },
  {
    path: '/documentacion-DSI/blog/welcome',
    component: ComponentCreator('/documentacion-DSI/blog/welcome', 'e2e'),
    exact: true
  },
  {
    path: '/documentacion-DSI/markdown-page',
    component: ComponentCreator('/documentacion-DSI/markdown-page', 'cf5'),
    exact: true
  },
  {
    path: '/documentacion-DSI/docs',
    component: ComponentCreator('/documentacion-DSI/docs', '3af'),
    routes: [
      {
        path: '/documentacion-DSI/docs',
        component: ComponentCreator('/documentacion-DSI/docs', '35c'),
        routes: [
          {
            path: '/documentacion-DSI/docs',
            component: ComponentCreator('/documentacion-DSI/docs', 'a0e'),
            routes: [
              {
                path: '/documentacion-DSI/docs/category/cupones',
                component: ComponentCreator('/documentacion-DSI/docs/category/cupones', '06b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/facturación-electronica',
                component: ComponentCreator('/documentacion-DSI/docs/category/facturación-electronica', '0f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/facturación-electronica-1',
                component: ComponentCreator('/documentacion-DSI/docs/category/facturación-electronica-1', '963'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/kioskos',
                component: ComponentCreator('/documentacion-DSI/docs/category/kioskos', 'e8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/maxpoint',
                component: ComponentCreator('/documentacion-DSI/docs/category/maxpoint', 'ecb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/productos',
                component: ComponentCreator('/documentacion-DSI/docs/category/productos', '5a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/productos-1',
                component: ComponentCreator('/documentacion-DSI/docs/category/productos-1', '9c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/sincronización',
                component: ComponentCreator('/documentacion-DSI/docs/category/sincronización', 'e89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/tutorial---basics',
                component: ComponentCreator('/documentacion-DSI/docs/category/tutorial---basics', 'cbf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/category/tutorial---extras',
                component: ComponentCreator('/documentacion-DSI/docs/category/tutorial---extras', '64c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Facturacion Electronica/Facturacion Electronica copy/MANUAL DEL SISTEMA  MAXPOINT',
                component: ComponentCreator('/documentacion-DSI/docs/Facturacion Electronica/Facturacion Electronica copy/MANUAL DEL SISTEMA  MAXPOINT', '945'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Facturacion Electronica/Facturacion Electronica copy/Maxpoint',
                component: ComponentCreator('/documentacion-DSI/docs/Facturacion Electronica/Facturacion Electronica copy/Maxpoint', '67d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Facturacion Electronica/Maxpoint',
                component: ComponentCreator('/documentacion-DSI/docs/Facturacion Electronica/Maxpoint', 'f0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/intro',
                component: ComponentCreator('/documentacion-DSI/docs/intro', 'bc1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Cupones/Descargar Productos y Precios',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Cupones/Descargar Productos y Precios', '008'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Kioskos/Descargar Productos y Precios',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Kioskos/Descargar Productos y Precios', '13b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Manual del Sistema Maxpoint',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Manual del Sistema Maxpoint', '8b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Productos/Descargar Productos y Precios',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Productos/Descargar Productos y Precios', 'eb7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/Maxpoint/Restaurantes/Descargar Productos y Precios',
                component: ComponentCreator('/documentacion-DSI/docs/Maxpoint/Restaurantes/Descargar Productos y Precios', '0fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/documentacion-DSI/docs/tutorial-basics/congratulations', 'cda'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/documentacion-DSI/docs/tutorial-basics/create-a-blog-post', '89c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/documentacion-DSI/docs/tutorial-basics/create-a-document', '370'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/documentacion-DSI/docs/tutorial-basics/create-a-page', 'ce7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/documentacion-DSI/docs/tutorial-basics/deploy-your-site', 'f8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/documentacion-DSI/docs/tutorial-basics/markdown-features', '56e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/documentacion-DSI/docs/tutorial-extras/manage-docs-versions', 'c15'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion-DSI/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/documentacion-DSI/docs/tutorial-extras/translate-your-site', '9f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/documentacion-DSI/',
<<<<<<< HEAD
    component: ComponentCreator('/documentacion-DSI/', '8e4'),
=======
    component: ComponentCreator('/documentacion-DSI/', '2f7'),
>>>>>>> 22ec8047a184da16fc55cdf11885910e4ffb32e2
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
