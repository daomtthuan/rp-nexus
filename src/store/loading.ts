import { Module, VuexModule, Mutation } from 'vuex-module-decorators';

@Module({
  name: 'loading',
  stateFactory: true,
  namespaced: true,
})
export default class LoadingModule extends VuexModule {
  private isLoading: boolean = true;

  @Mutation
  public setLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }
}
