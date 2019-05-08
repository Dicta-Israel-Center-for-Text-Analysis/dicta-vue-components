<template>
  <div id="app">
    <Header :hebrew="hebrew" @lang-changed="hebrew = !hebrew"></Header>
    <div class="main-content">
      <div class="container offset-scrollbar">
        <div class="row">
          <div class="col">
            <hr>
            <h3>Typography</h3>
            <h1>H1</h1>
            <h2>H2</h2>
            <h3>H3</h3>
            <p>P</p>
            <small>small</small>
            <h1>עברית</h1>
            <h2>עברית</h2>
            <h3>עברית</h3>
            <p>עברית</p>
            <small>עברית</small>
            <ul>
              <li>Unordered list</li>
              <li>Unordered list</li>
            </ul>
            <ol>
              <li>Ordered list</li>
              <li>Ordered list</li>
            </ol>
            <a href="#">Link</a>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-12"><h3>Icons</h3></div>
          <div class="col"><i-info-circle></i-info-circle><br>i-info-circle</div>
          <div class="col"><i-download></i-download><br>i-download</div>
          <div class="col"><i-upload></i-upload><br>i-upload</div>
          <div class="col"><i-pencil-alt></i-pencil-alt><br>i-pencil-alt</div>
          <div class="col"><i-share-square></i-share-square><br>i-share-square</div>
          <div class="col"><i-search-plus></i-search-plus><br>i-search-plus</div>
          <div class="col"><i-search-minus></i-search-minus><br>i-search-minus</div>
          <div class="col"><i-angle-down></i-angle-down><br>i-angle-down</div>
        </div>
        <div class="row">
          <div class="col"><i-reply></i-reply><br>i-reply</div>
          <div class="col"><i-share></i-share><br>i-share</div>
          <div class="col"><i-clone></i-clone><br>i-clone</div>
          <div class="col"><i-keyboard></i-keyboard><br>i-keyboard</div>
          <div class="col"><i-envelope></i-envelope><br>i-envelope</div>
          <div class="col"><i-arrow-left></i-arrow-left><br>i-arrow-left</div>
          <div class="col"><i-arrow-right></i-arrow-right><br>i-arrow-right</div>
          <div class="col"><i-arrow-up></i-arrow-up><br>i-arrow-up</div>
        </div>
        <div class="row">
          <div class="col"><i-times></i-times><br>i-times</div>
          <div class="col"><i-check></i-check><br>i-check</div>
          <div class="col"><i-angle-left></i-angle-left><br>i-angle-left</div>
          <div class="col"><i-angle-right></i-angle-right><br>i-angle-right</div>
          <div class="col"><i-caret-down></i-caret-down><br>i-caret-down</div>
          <div class="col"><i-caret-up></i-caret-up><br>i-caret-up</div>
          <div class="col"><i-caret-left></i-caret-left><br>i-caret-left</div>
          <div class="col"><i-caret-right></i-caret-right><br>i-caret-right</div>
        </div>
        <div class="row">
          <div class="col" style="flex: none;width: 12.5%"><i-user></i-user><br>i-user</div>
          <div class="col" style="flex: none;width: 12.5%"><i-user-circle></i-user-circle><br>i-user-circle</div>
          <div class="col" style="flex: none;width: 12.5%"><i-cog></i-cog><br>i-cog</div>
          <div class="col" style="flex: none;width: 12.5%"><i-file></i-file><br>i-file</div>
          <div class="col" style="flex: none;width: 12.5%"><i-star></i-star><br>i-star</div>
          <div class="col" style="flex: none;width: 12.5%"><i-star :solid="true"></i-star><br>i-star :solid="true"</div>
          <div class="col"><i-arrow-alt-circle-left></i-arrow-alt-circle-left><br>i-arrow-alt-circle-left</div>
        </div>
        <div class="row mt-3">
          <div class="col-12"><h3>Icon sizes</h3></div>
        </div>
        <div class="row">
          <div class="col-1"><i-info-circle size="large"></i-info-circle></div>
          <div class="col-1"><i-info-circle></i-info-circle></div>
          <div class="col-1"><i-info-circle size="small"></i-info-circle></div>
          <div class="col-1"><i-info-circle size="x-small"></i-info-circle></div>
        </div>
        <hr>
        <div class="row">
          <div class="col">
            <h3>Colors</h3>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="swatch-dark bg-primary">Primary</div>
          </div>
          <div class="col">
            <div class="swatch-dark bg-secondary">Secondary</div>
          </div>
          <div class="col">
            <div class="swatch-dark bg-success">Success</div>
          </div>
          <div class="col">
            <div class="swatch-dark bg-info">Info</div>
          </div>
          <div class="col">
            <div class="swatch-dark bg-warning">Warning</div>
          </div>
          <div class="col">
            <div class="swatch-dark bg-danger">Danger</div>
          </div>
          <div class="col">
            <div class="swatch-light bg-light">Light</div>
          </div>
          <div class="col">
            <div class="swatch-dark bg-dark">Dark</div>
          </div>
          <div class="col-2"></div>
        </div>

        <hr>
        <div class="row">
          <div class="col">
            <h2>UI components</h2>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h3>Buttons</h3>
            <p>Make sure to check hover and focus</p>
          </div>
        </div>
        <div class="row">
          <div class="col-auto">
            <button class="btn btn-primary">Primary</button>
          </div>
          <div class="col-auto">
            <button class="btn btn-outline-primary">Outline Primary</button>
          </div>
          <div class="col-auto">
            <button class="btn btn-secondary">Secondary</button>
          </div>
          <div class="col-auto">
            <button class="btn btn-light">Light</button>
          </div>
          <div class="col-auto">
            <button class="btn btn-link text-primary">Link</button>
          </div>
          <div class="col-auto">
            <button class="btn btn-link">Link</button>
          </div>
          <div class="col-auto">
            <button class="btn btn-link text-underline">Link</button>
          </div>
          <div class="col-auto bg-primary">
            <button class="btn btn-link-white">Link</button>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-12">
            <h3>Disabled</h3>
          </div>
          <div class="col-auto">
            <button disabled class="btn btn-primary">Primary</button>
          </div>
          <div class="col-auto">
            <button disabled class="btn btn-outline-primary">Outline Primary</button>
          </div>
          <div class="col-auto">
            <button disabled class="btn btn-secondary">Secondary</button>
          </div>
          <div class="col-auto">
            <button disabled class="btn btn-light">Light</button>
          </div>
          <div class="col-auto">
            <button disabled class="btn btn-link">Link</button>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-12">
            <h3>Sizes</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-auto">
            <button class="btn btn-primary btn-lg">Large</button>
          </div>
          <div class="col-auto">
            <button class="btn btn-primary">Medium</button>
          </div>
          <div class="col-auto">
            <button class="btn btn-primary btn-sm">Small</button>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-12">
            <h2>Inputs</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <div class="form-group">
              <label for="input1">Input</label>
              <input id="input1" class="form-control">
            </div>
          </div>
          <div class="col-3">
            <div class="form-group">
              <label for="input2">Large Input</label>
              <input id="input2" class="form-control form-control-lg">
            </div>
          </div>
          <div class="col-3">
            <div class="form-group">
              <label for="input3">Invalid Input</label>
              <input id="input3" class="form-control form-control-lg is-invalid">
              <div class="invalid-feedback">
                Please choose a username.
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-12">
            <h2>Checkboxes, Switches, Radios</h2>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <checkbox :checked="true">Checkbox test</checkbox>
            <checkbox :indeterminate="true">Checkbox test</checkbox>
            <checkbox>Checkbox test</checkbox>
            <checkbox :disabled="true">Checkbox test</checkbox>
          </div>
          <div class="col">
            <checkbox :as-switch="true" :checked="true">Checkbox test</checkbox>
            <checkbox :as-switch="true">Checkbox test</checkbox>
            <checkbox :as-switch="true" :disabled="true">Checkbox test</checkbox>
          </div>
          <div class="col">
            <radio v-model="radio2" :value="'a'">Radio 1</radio>
            <radio v-model="radio2" :value="'b'">Radio 2</radio>
            <radio v-model="radio2" :value="'c'">Radio 3</radio>
            <radio v-model="radio2" :disabled="true" :value="'d'">Disabled</radio>
          </div>
        </div>
        <div class="row he mt-3" dir="rtl">
          <div class="col-12">
            <h2>עברית</h2>
          </div>
        </div>
        <div class="row he" dir="rtl">
          <div class="col">
            <checkbox :checked="true">Checkbox test</checkbox>
            <checkbox :indeterminate="true">Checkbox test</checkbox>
            <checkbox>Checkbox test</checkbox>
            <checkbox :disabled="true">Checkbox test</checkbox>
          </div>
          <div class="col">
            <checkbox :as-switch="true" :checked="true">Checkbox test</checkbox>
            <checkbox :as-switch="true">Checkbox test</checkbox>
            <checkbox :as-switch="true" :disabled="true">Checkbox test</checkbox>
          </div>
          <div class="col">
            <radio v-model="radio2" :value="'a'">Radio 1</radio>
            <radio v-model="radio2" :value="'b'">Radio 2</radio>
            <radio v-model="radio2" :value="'c'">Radio 3</radio>
            <radio v-model="radio2" :disabled="true" :value="'d'">Disabled</radio>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-12">
            <h2>Dropdowns</h2>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <d-dropdown class="w-100"
                        :options="['First', 'Second', 'Third', 'Fourth']"
                        v-model="dropdown1"/>
          </div>
          <div class="col he" dir="rtl">
            <d-dropdown class="w-100"
                        :options="['ראשון', 'שני', 'שלישי', 'רביעי']"
                        v-model="dropdown2"/>
          </div>
          <div class="col">
            <d-dropdown class="w-100"
                        :options="[{
                          display: 'First',
                          value: 1
                        },
                        {
                          display: 'Second',
                          value: 2
                        },{
                          display: 'Third',
                          value: 3
                        }]"
                        display-field="display"
                        v-model="dropdown3"/>
            <p class="mt-1">Selection value: {{dropdown3.value ? dropdown3.value : 'None'}}</p>
          </div>
          <div class="col-3">
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <h2>Tooltips</h2>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <p>
              "Lorem ipsum
              <i-info-circle v-b-tooltip.hover title="Tooltip"></i-info-circle>
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              ariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum."
            </p>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <h2>Notifications</h2>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <b-card>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla ariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum."
              </p>
              <b-btn @click="notification = 3">Show Notification</b-btn>
              <b-alert variant="notification"
                       :show="notification"
                       @dismissed="notification = 0"
                       fade
                       class="notification"
              >המילה נוספה למאגר</b-alert>
            </b-card>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <h2>Dialogs</h2>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-3">
            <b-button v-b-modal.modal-1>Launch demo modal</b-button>

            <b-modal id="modal-1" ok-title="Download">
              <template slot="modal-header"><div><i-download></i-download> Download file</div></template>
              <p class="my-4">Hello from modal!</p>
            </b-modal>
          </div>
          <div class="col-3 he">
            <b-button v-b-modal.modal-2>Launch modal בעברית</b-button>

            <b-modal id="modal-2" ok-title="הורד" cancel-title="ביטול">
              <template slot="modal-header"><div><i-download></i-download> הורדת קובץ</div></template>
              <p class="my-4">שלום מהדיאלוג!</p>
            </b-modal>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <h2>Frames</h2>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-3">
            <div class="frame p-3">
              <h3>Frame</h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </div>
          </div>
          <div class="col-3">
            <div class="raised-frame p-3">
              <h3>Raised Frame</h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </div>
          </div>
        </div>
        <div class="row mt-3"></div>
      </div>
    </div>
    <Footer :hebrew="hebrew"></Footer>
  </div>
</template>

<script>
import Header from './components/commonHeader'
import Footer from './components/commonFooter'
import Checkbox from './components/checkbox'
import Radio from './components/radio'
import DDropdown from './components/DDropdown'

export default {
  name: 'App',
  components: {
    DDropdown,
    Radio,
    Checkbox,
    Footer,
    Header
  },
  data () {
    return {
      radio2: 'a',
      hebrew: false,
      dropdown1: 'Please select',
      dropdown2: 'נא לבחור',
      dropdown3: { display: 'Example using display-field' },
      notification: 0
    }
  }
}
</script>

<style lang="scss">
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: calc(100vh - 1px);
    display: flex;
    flex-direction: column;
  }

  .main-content {
    flex: 1;
    overflow: auto;
  }

  .container.offset-scrollbar {
    padding-left: calc((100vw - 100%)/2 + 15px);
  }

  @mixin swatch {
    width: 92px;
    height: 36px;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swatch-dark {
    @include swatch;
    color: #fff;
  }
  .swatch-light {
    @include swatch;
    color: #949494;
  }

  @import './css/custom.scss';

</style>
