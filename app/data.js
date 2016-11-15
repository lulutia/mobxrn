import {action, reaction, observable, observe, computed, autorun} from 'mobx';
import autobind from 'autobind-decorator';
import {History} from 'tools';
import remotedev from 'mobx-remotedev';

@autobind
class CounterStore {
  @observable counter = 0;
  @observable total = 0;
  @observable name = '';
  @observable currentLocation = '/';

  constructor(){
    reaction(()=>this.counter, this.increaseTotal);
  }

  @computed({asStructure: true}) get showName() {
    if (this.name === ''){return 'please'; }
    return this.name;
  }
  @action increaseTotal(){
    this.total++;
  }

  @action increase(){
    this.counter++;
  }

  @action decrease(){
    this.counter--;
  }
  @action changePath(path){
    this.currentLocation = path;
  }
  @action changeName(text){
    this.name = text;
  }
}

const counter = remotedev(new CounterStore(), { remote: true });

export default counter;
