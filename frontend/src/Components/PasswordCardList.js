import React, {useState} from "react";
import PasswordCard from "./PasswordCard";

export default function PasswordCardList({PasswordList}) {
    const PasswordListComponent = PasswordList.map((currentPassword) =>(<PasswordCard currentPassword={currentPassword}/>));

    return (
        <div>
            {PasswordListComponent}
        </div>

    );
}