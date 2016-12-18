﻿import * as React from "react";
import {
    Button,
    ButtonType,
    Panel,
    TextField
} from "office-ui-fabric-react";
import {
    Data,
    IData
} from "./data";

/**
 * Properties
 */
interface INewItemPanelProps {
    visible?: boolean;
}

/**
 * State
 */
interface INewItemPanelState {
    IsValid?: boolean;
    Item?: IData;
}

/**
 * New Item Panel
 */
export class NewItemPanel extends React.Component<INewItemPanelProps, INewItemPanelState> {
    /**
     * Constructor
     */
    constructor(props: INewItemPanelProps) {
        super(props);

        // Default the state
        this.state = {
            IsValid: false,
            Item: {
                County: "",
                State: "",
                Title: ""
            }
        };
    }

    /**
     * Methods
     */

    // Method to add a new item
    private addItem(event) {
        // Disable postback
        event.preventDefault();

        // Add the item
        Data.addItem(this.state.Item).then((item: $REST.Types.IListItem) => {
            // Refresh the page
            document.location.reload();
        });
    }

    // Method to get the error message
    private getErrorMessage(value, fieldName) {
        // Save the value
        switch (fieldName) {
            case "city":
                this.state.Item.Title = value;
                break;
            case "county":
                this.state.Item.County = value;
                break;
            case "state":
                this.state.Item.State = value;
                break;
        }

        // Save the state
        this.setState({
            IsValid: this.state.Item.County.length > 0 && this.state.Item.State.length > 0 && this.state.Item.Title.length > 0
        });

        // Return the error message
        return value && value.length > 0 ? "" : "The " + fieldName + " is required.";
    }

    // Render the component
    render() {
        return (
            <Panel
                isOpen={this.props.visible}>
                <TextField
                    label="City:"
                    required={true}
                    value={this.state.Item.Title}
                    onGetErrorMessage={value => this.getErrorMessage(value, "city")}
                    />
                <TextField
                    label="County:"
                    required={true}
                    value={this.state.Item.County}
                    onGetErrorMessage={value => this.getErrorMessage(value, "county")}
                    />
                <TextField
                    label="State:"
                    required={true}
                    value={this.state.Item.State}
                    onGetErrorMessage={value => this.getErrorMessage(value, "state")}
                    />
                <Button disabled={!this.state.IsValid} onClick={event => this.addItem(event)}>Save</Button>
            </Panel>
        );
    }
}