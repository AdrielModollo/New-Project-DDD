// src/shared/container/index.ts
import { container } from 'tsyringe'

import UsersRepository from '../../modules/api/infra/typeorm/repositories/UsersRepository'
import IUsersRepository from '../../modules/api/repositories/IUsersRepository'

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository
)