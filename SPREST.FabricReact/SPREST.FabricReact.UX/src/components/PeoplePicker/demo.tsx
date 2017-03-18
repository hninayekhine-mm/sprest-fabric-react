import * as React from "react";
import {
    Label
} from "office-ui-fabric-react";
import {
    MyPeoplePicker
} from "./peoplepicker";

/**
 * Properties
 */
interface IPeoplePickerDemoProps {
    visible?: boolean;
}

/**
 * People Picker Demo
 */
export class PeoplePickerDemo extends React.Component<IPeoplePickerDemoProps, any> {
    // Render the component
    render() {
        return !this.props.visible ? <div /> :
        (
            <div>
                <h1>Demo</h1>
                <h5>The people picker search requires you to type in a minimum of 3 characters.</h5>
                <div className="ms-Grid">
                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col ms-u-md3">
                            <Label>Single User</Label>
                            <MyPeoplePicker />
                        </div>
                        <div className="ms-Grid-col ms-u-md3">
                            <Label>Multiple Users</Label>
                            <MyPeoplePicker multiple={true} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}