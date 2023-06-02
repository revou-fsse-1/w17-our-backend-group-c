[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/3GK8eW1r)

# SIMERCE APP 🛒

![](/assets/simerce-app.png)

Simerce is an acronym from Simple E-commerce App. This app was inspired from one of Mr.Dandi's friends that has a smalll groceries shop. He is wondering if his products he is selling can be put into an app like e-commerce but with much smaller scope.

## Team Member 🤝

---

|          Name           |         Roles         |                                    Tasks                                    |
| :---------------------: | :-------------------: | :-------------------------------------------------------------------------: |
| Dandi Rizky Eko Saputro | Lead Backend Engineer | Auth, Products Service, Admin Service, 3rd Party Integration and Deployment |
|      Immanuel Arya      |   Backend Engineer    |             Users Service, Wishlists Service and Documentation              |

## Deployment 🚀

---

- Deployment (Dandi)

  - GCP Link: https://simerce-app-v1.dandirizky.site/
  - Railway Link: https://w17-our-backend-group-c-production.up.railway.app

- Deployment (Arya)

  - GCP Link: https://simerce-app-v1.colorfulworldghibli.site/docs
  - Railway Link: https://w17-our-backend-group-c.up.railway.app/docs

- Docker

  - https://hub.docker.com/r/dandirizkyy/simerce-app-v1/tags

  - https://us-east1-docker.pkg.dev/complete-stock-387402/docker/simerce-app-v1

## Documentation 📷

---

### Database Diagram

![Diagram Database](assets/diagram.png)

### Infrastructure Diagram

![Infra Diagram](assets/simerce-app-v1.png)

## Endpoints 🔗

---

|  HTTP  |           Endpoint            |          Description           |             Auth             | Status |
| :----: | :---------------------------: | :----------------------------: | :--------------------------: | :----: |
|  POST  |      /auth/register/user      |         Register User          |     Everyone can access      |
|  POST  |       /auth/login/user        |           Login User           |  User and Admin can access   |   🔒   |
|  POST  |     /auth/register/admin      |         Register Admin         | Endpoint only given to Admin |
|  POST  |       /auth/login/admin       |          Login Admin           | Endpoint only given to Admin |   🔒   |
|  GET   |       /auth/profileuser       |       Show User Profile        |  User and Admin can access   |   🔒   |
|  GET   |      /auth/profileadmin       |       Show Admin Profile       |    Only Admin can access     |   🔒   |
|  GET   |            /users             |         Show All Users         |  User and Admin can access   |   🔒   |
|  GET   |          /users/{id}          |        Show User by Id         |  User and Admin can access   |   🔒   |
| DELETE |          /users/{id}          |       Delete Users by Id       |    Only Admin can access     |   🔒   |
|  PUT   |  /users/deletewishlists/{id}  |     Delete Wishlist by Id      |  User and Admin can access   |   🔒   |
|  GET   |         /products/all         |       Show All Products        |     Everyone can access      |
|  GET   |        /products/{id}         |      Show Products by Id       |  User and Admin can access   |   🔒   |
|  PUT   |        /products/{id}         |     Update Products by Id      |    Only Admin can access     |   🔒   |
| PATCH  |        /products/{id}         |      Patch Products by Id      |    Only Admin can access     |   🔒   |
| DELETE |        /products/{id}         |     Delete Products by Id      |    Only Admin can access     |   🔒   |
|  GET   |           /products           |        Search Products         |  User and Admin can access   |   🔒   |
|  POST  |           /products           |          Add Products          |    Only Admin can access     |   🔒   |
|  GET   |          /wishlists           |        Search Wishlist         |  User and Admin can access   |   🔒   |
|  POST  |          /wishlists           |        Create Wishlist         |  User and Admin can access   |   🔒   |
|  GET   |        /wishlists/{id}        |      Show Wishlist by Id       |  User and Admin can access   |   🔒   |
| PATCH  |        /wishlists/{id}        |    To Update Wishlist Name     |  User and Admin can access   |   🔒   |
| DELETE |        /wishlists/{id}        |     Delete Wishlists by Id     |  User and Admin can access   |   🔒   |
|  PUT   |  /wishlists/addproduct/{id}   |   Add Products to Wishlists    |  User and Admin can access   |   🔒   |
|  PUT   | /wishlists/deleteproduct/{id} | Delete Prodcuts from Wishlists |  User and Admin can access   |   🔒   |
|  GET   |            /admins            |          Show Admins           |    Only Admin can access     |   🔒   |
| DELETE |         /admins/{id}          |       Show Admins by Id        |    Only Admin can access     |   🔒   |

## Technologies 💻

---

- NestJS
- Swagger
- Typescript
- PrismaORM
- PostgreSQL
- Docker
- Railway
- GCP

## Support 🙌

---

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
