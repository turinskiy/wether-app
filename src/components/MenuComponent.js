// import { connect } from 'react-redux';
import React from 'react';
// import { Redirect } from 'react-router-dom';

export default class MenuComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="parent">
            <div class="item logo">Logo</div>
            <div class="item user">User</div>
            <div class="item menu-items">
                <div>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis vel ipsum rutrum convallis. Sed convallis faucibus nisi, ac eleifend turpis egestas sed. Mauris porta ex felis, eget tristique ante pulvinar vitae. Donec a mattis urna. Nulla scelerisque mi id erat egestas tempor. Aenean accumsan dui et tellus lobortis elementum. Mauris tincidunt nec nisi et sollicitudin. Maecenas dapibus quam ac lacinia viverra. Maecenas quis commodo sapien, sit amet consectetur lacus. Maecenas tincidunt posuere lobortis. Mauris consectetur justo id ligula dictum hendrerit.</div>
                <p>2. Phasellus eu odio ac mauris pulvinar iaculis at vitae dui. Proin ligula purus, sollicitudin faucibus blandit eget, gravida et ipsum. Aenean ex lectus, facilisis dignissim nisl in, commodo accumsan metus. Nunc pretium, erat in ultricies imperdiet, eros leo dictum arcu, ut luctus nisi leo sed magna. Fusce leo mi, consectetur a auctor non, semper ut lacus. Vestibulum sodales eu dui sit amet lacinia. Morbi cursus odio id nunc pharetra, ut vulputate nulla mollis. Morbi commodo ligula non nunc ultrices, sed vestibulum mauris eleifend. Pellentesque luctus augue eu ante dapibus dictum. Nunc sed massa magna. Aliquam sit amet porttitor mauris. Donec in ligula orci.</p>
                <p>3. Etiam blandit enim ac nisi laoreet accumsan. Proin mollis neque nibh, a posuere augue hendrerit vitae. Vivamus vulputate sem vitae mauris varius pellentesque. Aliquam nec neque ligula. Mauris gravida laoreet tellus, in bibendum tortor porta eget. Cras at consectetur justo, pellentesque sagittis orci. Nam laoreet lacus a pretium tincidunt. Suspendisse aliquam pellentesque volutpat. Nam in sollicitudin nulla.</p>
                <p>4. Donec quis massa iaculis, dictum felis at, blandit diam. Fusce vitae elementum purus. Proin a tristique ante. Aenean quis leo sed neque dictum interdum. Nullam hendrerit arcu in suscipit rutrum. Etiam elementum orci tellus, non bibendum purus semper at. Nam lobortis faucibus ultricies. Suspendisse luctus molestie ante eget consectetur. Ut commodo dui eget arcu feugiat varius. In lobortis nunc at lorem laoreet, efficitur sagittis arcu condimentum. Nullam tincidunt odio est, eget cursus urna dignissim et. Nam ultricies nunc a ipsum sollicitudin accumsan. Cras ac posuere leo. Maecenas fringilla malesuada turpis, eget vulputate dolor rhoncus at. In rutrum nisl eu velit pharetra porta.</p>
                <p>5. Vivamus egestas fringilla ipsum quis viverra. Nunc nec blandit lorem, sit amet rutrum ligula. Aenean id est a quam vestibulum malesuada. Praesent lobortis ex quis lobortis sodales. Donec a elementum mi. Vivamus mauris erat, pulvinar vitae mollis ac, ultrices sed metus. Nulla ut sem at nisl dapibus volutpat. Nam eget erat leo. Proin imperdiet nisi arcu, id mattis lorem euismod vel. Fusce id metus dapibus, mattis augue congue, ultricies lorem. Donec eget egestas ante.</p>
            </div>
            <div class="item theme">Theme</div>
            <div class="item support">Support</div>
            </div>
        );
    }
}