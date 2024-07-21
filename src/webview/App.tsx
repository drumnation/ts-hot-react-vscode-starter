import React, { useState } from 'react';
import {
  VSCodeButton,
  VSCodeCheckbox,
  VSCodeDivider,
  VSCodeDropdown,
  VSCodeOption,
  VSCodePanels,
  VSCodePanelTab,
  VSCodePanelView,
  VSCodeProgressRing,
  VSCodeRadio,
  VSCodeRadioGroup,
  VSCodeTextField,
  VSCodeTag
} from '@vscode/webview-ui-toolkit/react';
import { vscode } from './vscode-api';

const App: React.FC = () => {
  const [textValue, setTextValue] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [selectedTab, setSelectedTab] = useState('tab1');
  const [dropdownValue, setDropdownValue] = useState('option1');
  const [radioValue, setRadioValue] = useState('radio1');

  const handleButtonClick = () => {
    vscode.postMessage({
      command: 'showMessage',
      text: 'Button clicked!'
    });
  };

  const handleTextChange = (e: unknown) => {
    const event = e as React.ChangeEvent<HTMLInputElement>;
    setTextValue(event.target.value);
  };

  const handleCheckboxChange = (e: unknown) => {
    const event = e as React.ChangeEvent<HTMLInputElement>;
    setCheckboxChecked(event.target.checked);
  };

  const handleDropdownChange = (e: unknown) => {
    const event = e as React.ChangeEvent<HTMLSelectElement>;
    setDropdownValue(event.target.value);
  };

  const handleRadioChange = (e: unknown) => {
    const event = e as React.ChangeEvent<HTMLInputElement>;
    setRadioValue(event.target.value);
  };

  const handleTabChange = (e: unknown) => {
    const customEvent = e as CustomEvent<{ tabId: string }>;
    setSelectedTab(customEvent.detail.tabId);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>VS Code Webview UI Toolkit Demo</h1>

      <VSCodeDivider />

      <h2>Buttons and Text Fields</h2>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <VSCodeButton onClick={handleButtonClick}>Click Me</VSCodeButton>
        <VSCodeTextField
          value={textValue}
          onChange={handleTextChange}
          placeholder="Enter some text"
        />
      </div>

      <VSCodeDivider />

      <h2>Checkbox and Progress Ring</h2>
      <VSCodeCheckbox
        checked={checkboxChecked}
        onChange={handleCheckboxChange}
      >
        Check me
      </VSCodeCheckbox>
      <VSCodeProgressRing />

      <VSCodeDivider />

      <h2>Dropdown</h2>
      <VSCodeDropdown
        value={dropdownValue}
        onChange={handleDropdownChange}
      >
        <VSCodeOption value="option1">Option 1</VSCodeOption>
        <VSCodeOption value="option2">Option 2</VSCodeOption>
        <VSCodeOption value="option3">Option 3</VSCodeOption>
      </VSCodeDropdown>

      <VSCodeDivider />

      <h2>Radio Group</h2>
      <VSCodeRadioGroup
        value={radioValue}
        onChange={handleRadioChange}
      >
        <VSCodeRadio value="radio1">Radio 1</VSCodeRadio>
        <VSCodeRadio value="radio2">Radio 2</VSCodeRadio>
        <VSCodeRadio value="radio3">Radio 3</VSCodeRadio>
      </VSCodeRadioGroup>

      <VSCodeDivider />

      <h2>Panels</h2>
      <VSCodePanels
        activeid={selectedTab}
        onChange={handleTabChange}
      >
        <VSCodePanelTab id="tab1">Tab 1</VSCodePanelTab>
        <VSCodePanelTab id="tab2">Tab 2</VSCodePanelTab>
        <VSCodePanelView id="view1">Content for Tab 1</VSCodePanelView>
        <VSCodePanelView id="view2">Content for Tab 2</VSCodePanelView>
      </VSCodePanels>

      <VSCodeDivider />

      <h2>Tags</h2>
      <VSCodeTag>Default Tag</VSCodeTag>
      <VSCodeTag color="error">Error Tag</VSCodeTag>
      <VSCodeTag color="warning">Warning Tag</VSCodeTag>
      <VSCodeTag color="success">Success Tag</VSCodeTag>

    </div>
  );
};

export default App;
