import * as React from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import { Editor, EditorTools } from '@progress/kendo-react-editor';
import { ToolbarSeparator } from '@progress/kendo-react-buttons';
import './editor.css';

const content =
    `
    <p style="border: 1px solid red;"><strong>strong text</strong></p>
    <p>
        <a href="http://test1.com/">test<img src="https://prosemirror.net/img/smiley.png" />1</a>
        <a href="http://test.com/" title="title"><em>plain </em><strong><em>text</em> p</strong></a>
        <a href="http://test2.com/">test2</a>
    </p>
    <p>
        <a href="http://test.com/" title="title">
            <em>plain </em>
            <strong><em>tex</em>t p</strong>
        </a>
    </p>
    <p>
        <a href="http://test.com/" title="title"><em>plain </em></a>
        <a href="www.test123.com" target="_blank" title="test"><strong><em>tex</em>t</strong></a>
        <a href="http://test.com/" title="title"><strong> pp</strong></a>
    </p>
    <p>
        <a href="http://test.com/" title="title">
            link 1
        </a>
        <a href="http://test.com/" title="title">
            same link 2
        </a>
    </p>
    <p><b>b text</b></p>
    <h4><span style="font-weight: bold; color: red;">span with bold and red style</span></h4>
    <h2><span style="font-style: italic;">h2 -> span with italic style
        <img src="https://prosemirror.net/img/smiley.png" /></span></h2>
    <p><span style="text-decoration: underline;">span with underline style</span></p>
    <p><em>em text</em></p>
    <p><i>i text</i></p>
    <p><u>u text</u></p>
    <p><span style="font-size: 22px;">font-size: 22px</span></p>
    <p><span style="font-family: Impact">font-family: Impact</span></p>
    <p>plain text p</p>
    <div>plain text div</div>
    <ol>
        <li>li 1</li>
        <li>li 2</li>
    </ol>
    <ul>
        <li>li 1</li>
        <li>li 2</li>
    </ul>
    <ol type="I">
        <li>li 1</li>
        <li>li 2</li>
    </ol>
    <table>
    <tbody>
        <tr>
            <td>Td1</td>
            <td>Td2</td>
        </tr>
        <tr>
            <td>Td3</td>
            <td>Td4</td>
        </tr>
    </tbody>
    </table>`
    ;

class EditorDemo extends React.Component<{}> {
    render() {
        return (
            <>
                <Editor
                    defaultContent={content}
                    contentStyle={{ height: 500 }}
                    defaultEditMode="iframe"
                    onMount={(_event) => {
                        //
                    }}
                    onPasteHtml={(event) => {
                        return event.pastedHtml;
                    }}
                    onExecute={(_event) => {
                        // window.console.log(event.transaction);
                        return true;
                    }}
                    tools={[
                        [EditorTools.Bold, EditorTools.Italic, EditorTools.Underline, EditorTools.Strikethrough],
                        [EditorTools.Subscript, EditorTools.Superscript],
                        [EditorTools.Undo, EditorTools.Redo],
                        [EditorTools.Link, EditorTools.Unlink, EditorTools.InsertImage],
                        [EditorTools.InsertTable],
                        [EditorTools.AlignLeft, EditorTools.AlignCenter, EditorTools.AlignRight,
                        EditorTools.AlignJustify],
                        [EditorTools.OrderedList, EditorTools.UnorderedList,
                            ToolbarSeparator, EditorTools.Indent, EditorTools.Outdent],
                        EditorTools.ViewHtml, ToolbarSeparator,
                        EditorTools.FontSize, EditorTools.FontName, EditorTools.FormatBlock
                    ]}
                />
                <br /><br /><br />
                <Editor
                    defaultContent={content}
                    contentStyle={{ height: 500 }}
                    defaultEditMode="div"
                    tools={[
                        [EditorTools.Bold, EditorTools.Italic, EditorTools.Underline, EditorTools.Strikethrough],
                        [EditorTools.Subscript, EditorTools.Superscript],
                        [EditorTools.Undo, EditorTools.Redo],
                        [EditorTools.Link, EditorTools.Unlink, EditorTools.InsertImage],
                        [EditorTools.InsertTable],
                        [EditorTools.AlignLeft, EditorTools.AlignCenter, EditorTools.AlignRight],
                        [EditorTools.OrderedList, EditorTools.UnorderedList, EditorTools.Indent, EditorTools.Outdent],
                        EditorTools.ViewHtml, ToolbarSeparator,
                        EditorTools.FontSize, EditorTools.FontName, EditorTools.FormatBlock
                    ]}
                />
            </>
        );
    }
}

export default EditorDemo;
