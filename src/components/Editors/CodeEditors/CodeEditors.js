import React, {Component} from 'react';
import { Card, CardHeader, CardBody, CardFooter, Form, FormGroup, Input } from 'reactstrap';

import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/eclipse.css';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';

const defaults = {
  markdown: '### [CodeMirror](http://codemirror.net)\n' +
  'A versatile _text_ editor implemented in **JavaScript*** for the browser. \n' +
  'It is specialized for editing `code`, and comes with a number of language modes and addons that implement more advanced editing functionality.',
  javascript: 'var component = {\n\tname: "react-codemirror2",\n\tauthor: "Salvatore Niro",\n\trepo: "https://github.com/scniro/react-codemirror2"\n};',
  xml: '<h1>I ♥ react-codemirror2</h1>'
};

class CodeEditors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: defaults.markdown,
      readOnly: false,
      mode: 'markdown',
      theme: 'material'
    };
  }

  render() {
    return (
      <Card>
        <CardHeader>
          CodeMirror
          <div className="card-actions"><a href="https://codemirror.net/" target="_blank">docs</a></div>
        </CardHeader>
        <CardBody>
          <CodeMirror
            ref={(node) => this.editor = node}
            value={this.state.code}
            autoFocus={true}
            options={{
              lineNumbers: true,
              readOnly: this.state.readOnly,
              mode: this.state.mode,
              theme: this.state.theme
            }}
            onBeforeChange={(editor, data, value) => { this.setState({value}); }}
            onChange={(editor, metadata, value) => { }}
          />
        </CardBody>
        <CardFooter>
          <Form inline>
            <FormGroup>
                <Input type="select" bsSize="sm" name="theme" id="theme" onChange={(e) => this.changeTheme(e)} value={this.state.theme} >
                  <option value="material">material</option>
                  <option value="eclipse">eclipse</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Input type="select" bsSize="sm" name="mode" id="mode" onChange={(e) => this.changeMode(e)} value={this.state.mode} >
                  <option value="markdown">markdown</option>
                  <option value="javascript">javascript</option>
                  <option value="xml">html</option>
                </Input>
            </FormGroup>
          </Form>
        </CardFooter>
      </Card>
    );
  }

  changeMode(e) {
    const mode = e.target.value;
    this.setState({
      mode: mode,
      code: defaults[mode]
    });
  }

  changeTheme(e) {
    const theme = e.target.value;
    this.setState({
      theme: theme,
    });
  }

  toggleReadOnly() {
    this.setState({
      readOnly: !this.state.readOnly
    }, () => { this.editor.editor.focus() })
  }
}

export default CodeEditors;
