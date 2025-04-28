# PianoShop
Области хранения данных:

-база данных на json-SERVER
-BFF
-redux-store

сущности:
- пользователь: БД (список пользователе), BFF(сессия текущего), стор (отображение в браузере)

- роль пользователя: БД (список ролей), BFF(сессия пользователя с ролью), стор (использование на клиенте)


- товар: БД(список товаров), стор (отображение данных)

- комментарий: БД(список комментариев ), стор (отображение данных)

таблицы БД:

пользователь: users: id / login / passord / registed_at / role_id
роли: role: id / name
товары: products: id / title / image_url /categories /content / published_at 
комментарии: comments: id / autor_id / post_id /content
категории товаров : category: id/name

схема состояния на BFF:

сессия текущего пользователя: login / password /role

схема для стора на клиенте:

- user: id / login / roleId / session
- products: array product:  id / title / imageUrl / publishedAt / commentsCount/price /description/polyphony/colors(array)/power/timbres/price/categories":[]/available     
- product: id / title / imageUrl / publishedAt / commentsCount/price /description/polyphony/colors(array)/power/timbres/price/unusual_features/
size
  
  categories":[]/  
  specifications/available
   array comments: id / autor /  content/ publishedAt

- users: array user: id / login  / registedAt / role





