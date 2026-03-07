/*
Copyright 2026 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React from "react";

interface IProps {
    src?: string;
}

export default class MRemoteAnimatedOverlay extends React.PureComponent<IProps> {
    public render(): React.ReactNode {
        if (!this.props.src) return null;

        const fileName = decodeURIComponent(new URL(this.props.src).pathname.split("/").at(-1) ?? "");

        return (
            <>
                <img
                    className="mx_MRemoteAnimatedOverlay"
                    src={this.props.src}
                    alt=""
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
                />
                <div
                    style={{
                        position: "absolute",
                        left: 12,
                        bottom: 12,
                        maxWidth: "calc(100% - 24px)",
                        padding: "6px 8px",
                        borderRadius: 8,
                        background: "rgb(0 0 0 / 0.68)",
                        color: "#fff",
                        pointerEvents: "none",
                        fontSize: 12,
                        lineHeight: 1.25,
                    }}
                >
                    <div
                        style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                        }}
                    >
                        {fileName}
                    </div>
                    <div
                        style={{
                            maxWidth: "100%",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            opacity: 0.8,
                        }}
                    >
                        {"🌍 "}
                        {this.props.src}
                    </div>
                </div>
            </>
        );
    }
}
