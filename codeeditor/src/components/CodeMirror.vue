/* eslint-disable */
<template>
 <div class="layout">
    <Layout>
        <Content :style="{padding: '5px'}">
            <Row :gutter="8">
                <Col span="18">
                    <Row>
                        <Button type="primary"  style="margin:2px" icon="checkmark-round">验证</Button>
                        <Button type="primary" icon="arrow-right-b">运行</Button>
                    </Row>
                    <Row>
                        <!-- or to manually control the datasynchronization（或者手动控制数据流，需要像这样手动监听changed事件） -->
                        <codemirror ref="myCm"
                                    :value="code" 
                                    :options="cmOptions"
                                    @ready="onCmReady"
                                    @focus="onCmFocus"
                                    @input="onCmCodeChange">
                        </codemirror>
                    </Row>
                    <Row>
                      <Card name="1-1" style="height:180px;margin-top:5px">
                        
                      </Card>
                    </Row>
                </Col>
                <Col span="6">
                    <Row>
                        <AutoComplete
                            v-model="selectedMethod"
                            icon="ios-search"
                            placeholder="input here">
                            <div class="demo-auto-complete-item" v-for="item in allMethods">
                                <div class="demo-auto-complete-group">
                                    <span>{{ item.title }}</span>
                                </div>
                                <Option v-for="option in item.children" :value="option.title" :key="option.title">
                                    <span class="demo-auto-complete-title">{{ option.title }}</span>
                                    <span class="demo-auto-complete-count">{{ option.count }} 人关注</span>
                                </Option>
                            </div>
                        </AutoComplete>
                    </Row>
                    <Row>
                        <Tabs :animated="false">
                            <TabPane label="常用函数"><Table height="250" :show-header="false" :columns="columns1" :data="methodsInfo_common"></Table></TabPane>
                            <TabPane label="统计函数"> <Table height="250" :show-header="false" :columns="columns1" :data="methodsInfo_stat"></Table></TabPane>
                            <TabPane label="自定义函数"> <Table height="250" :show-header="false" :columns="columns1" :data="methodsInfo_custom"></Table></TabPane>
                        </Tabs>
                    </Row>
                    <Row>
                        <Card style="height:180px;margin-top:5px">
                          123123
                        </Card>
                    </Row>
                </Col>
            </Row>
           
        </Content>
    </Layout>
 </div>


</template>

<script>
// language js
import "codemirror/mode/javascript/javascript.js";
// theme css
import "codemirror/theme/base16-dark.css";
import keyWords from "../mothedsDemo.js";
// more codemirror resources
// import 'codemirror/some-resource...'
export default {
  name: "CodeMirror",
  data() {
    return {
      value4: "1-1",
      code: "const a = 10",
      methodsInfo: keyWords,
      methodsInfo_common: [],
      methodsInfo_stat: [],
      methodsInfo_custom: [],

      columns1: [
        {
          title: "名称",
          key: "name"
        }
      ],
      allMethods: [
        {
          title: "Sum",
          count: 1
        },
        {
          title: "Avg",
          count: 2
        },
        {
          title: "Min",
          count: 3
        },
        {
          title: "Max",
          count: 1
        }
      ],
      selectedMethod: "",
      cmOptions: {
        // codemirror options
        tabSize: 4,
        mode: "text/javascript",
        theme: "base16-dark",
        lineNumbers: true,
        line: true
        // more codemirror options, 更多 codemirror 的高级配置...
      }
    };
  },
  created() {
    console.log(keyWords);
    keyWords.forEach(item => {
      switch (item.type) {
        case 1:
          this.methodsInfo_common.push(item);
          break;
        case 2:
          this.methodsInfo_stat.push(item);
          break;
        case 3:
          this.methodsInfo_custom.push(item);
          break;
      }
    });
  },
  methods: {
    onCmReady(cm) {
      console.log("the editor is readied!", cm);
    },
    onCmFocus(cm) {
      console.log("the editor is focus!", cm);
    },
    onCmCodeChange(newCode) {
      console.log("this is new code", newCode);
      this.code = newCode;
    }
  },
  computed: {
    codemirror() {
      return this.$refs.myCm.codemirror;
    }
  },
  mounted() {
    console.log("this is current codemirror object", this.codemirror);
    // you can use this.codemirror to do something...
  }
};
</script>

<style>
.CodeMirror-lines {
  font-size: 28px;
}

.CodeMirror {
}

.layout {
  height: 800px;
}
</style>