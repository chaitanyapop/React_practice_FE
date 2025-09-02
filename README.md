# React_practice_FE

How to start react vite app?

1. npm create vite@latest my-app
2. choose react
3. choose JS or TS
4. Go to the project cd my-app
5. npm install
6. npm run dev

folder structure to follow -
src/
├── features/
│ ├── user/
│ │ ├── components/ # UserProfile.js, UserList.js
│ │ ├── services/ # userApi.js
│ │ ├── hooks/ # useUser.js
│ │ └── tests/ # UserProfile.test.js
│ └── product/
│ ├── components/ # ProductDetail.js, ProductList.js
│ ├── services/ # productApi.js
│ ├── hooks/ # useProduct.js
│ └── tests/ # ProductList.test.js
├── common/
│ ├── components/ # Button.js, Input.js
│ ├── hooks/ # useFetch.js
│ └── utils/ # date.js
├── assets/ # Static files
└── App.js # Root component
