
import { Module } from '@nestjs/common'
import { DatabaseModule } from '@infrastructure/database/database.module'

@Module({
  imports: [DatabaseModule],
  providers: [

    // DataSource est initialisé dans DatabaseModule et fourni depuis la couche de persistence
    // {
    //   provide: 'QuizServiceInterface',
    //   useFactory: (quizRepository: QuizRepositoryInterface) => {
    //     return new QuizService(quizRepository)
    //   },
    //   inject: ['QuizRepositoryInterface']
    // },
    // {
    //   provide: 'QuizUpdateServiceInterface',
    //   useFactory: (entityManager) => {
    //     return new QuizUpdateService(new QuizUpdate(entityManager, new Logger('UPDATE_QUIZ')))
    //   },
    //   inject: ['QuizUpdateManagerInterface']
    // }
  ],
  exports: [],
  controllers: []
})
export class QuizModule {}
