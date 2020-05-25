module.exports = {
  translation: {
    appName: 'Менеджер Задач',
    flash: {
      session: {
        create: {
          success: 'Вы залогинены',
          error: 'Неправильный емейл или пароль',
        },
        delete: {
          success: 'Вы разлогинены',
        },
      },
      users: {
        create: {
          error: 'Не удалось зарегистрировать',
          success: 'Пользователь успешно зарегистрирован',
        },
      },
      profile: {
        update: {
          success: 'Информация успешно обновлена',
          error: 'Email и пароль не могут быть пустыми!',
        },
        authorization: 'Для просмотра страницы профиля авторизуйтесь!',
        delete: {
          success: 'Ваш аккаунт успешно удалён!',
        }
      },
    },
    layouts: {
      application: {
        users: 'Пользователи',
        profile: 'Мой профиль',
        signIn: 'Вход',
        signUp: 'Регистрация',
        signOut: 'Выход',
      },
    },
    views: {
      session: {
        new: {
          signIn: 'Вход',
          submit: 'Войти',
        },
      },
      users: {
        new: {
          submit: 'Сохранить',
          signUp: 'Регистрация',
        },
        index: {
          id: 'ID',
          email: 'Email',
          firstName: 'Имя',
          lastName: 'Фамилия',
          password: 'Пароль',
        }
      },
      profile: {
        index: {
          title: 'Мой профиль',
          patch: 'Обновить',
          delete: 'Удалить аккаунт',
        }
      },
      welcome: {
        index: {
          hello: 'Добро пожаловать в менеджер задач!',
          description: 'Благодаря менеджеру задач пользователи могут упорядочивать проекты и расставлять приоритеты — работать станет гораздо удобнее и приятнее!',
          more: 'Начать Работу',
          features: ['Ставьте задачи', 'Назначайте ответственного', 'Контролируйте время'],
          feature4: 'Оптимизируйте работу',
          feature5: 'Достигайте целей',
          feature6: 'Поднимите продажи',
        },
      },
    },
  },
};
