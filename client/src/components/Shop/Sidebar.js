import React from 'react';
import { connect } from 'react-redux';

import { SHOW_ALL } from '../../constants';
import {  ALL_GOODS } from '../../constants/text';
import { groups } from '../../constants/data';

import { setVisibilityFilter } from '../../actions';
import FilterItem from './FilterItem';

const getFullId = (groupId, subGroupId) => {
    return subGroupId ? `${groupId}_${subGroupId}` : `${groupId}`;
}

const _Sidebar = ({visibilityFilter, changeActiveFilter}) => {
    const onFilterClick = (e, filter) => {
        changeActiveFilter(filter);
    }

    const checkActivity = (groupId, subGroupId) => {
        if (!visibilityFilter.group && visibilityFilter === groupId) {
            return true;
        } else if (!subGroupId && !visibilityFilter.subGroup) {
            return groupId === visibilityFilter.group;
        } else {
            return groupId === visibilityFilter.group && subGroupId === visibilityFilter.subGroup;
        }
    }

    return (
            <div className='shop__sidebar'>
                <ul className='shop__first-level-list'>
                    {groups.map(group => {
                        if (group.subGroup) {
                            return (
                                <div key={group.id}>
                                    <FilterItem
                                        filterData={{group: group.groupId}}
                                        onClick={onFilterClick}
                                        name={group.name}
                                        isActive={checkActivity(group.groupId)}
                                    />
                                    <ul className='shop__second-level-list'>
                                        {group.subGroup.map(subGroup => {
                                            return <FilterItem
                                                key={getFullId(group.groupId, subGroup.subGroupId)}
                                                filterData={{group: group.groupId, subGroup: subGroup.subGroupId}}
                                                onClick={onFilterClick}
                                                name={subGroup.name}
                                                isActive={checkActivity(group.groupId, subGroup.subGroupId)}
                                                />
                                        })}
                                    </ul>
                                </div>
                            )
                        }
                        return (
                            <FilterItem
                                key={getFullId(group.groupId)}
                                filterData={{group: group.groupId}}
                                onClick={onFilterClick}
                                name={group.name}
                                isActive={checkActivity(group.groupId)}
                            />
                        )
                    })}
                </ul>
            </div>
    )
};

const mapStateToProps = state => ({
    visibilityFilter: state.visibilityFilter,
})

const mapDispatchToProps = dispatch => ({
    changeActiveFilter: filter => dispatch(setVisibilityFilter(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(_Sidebar)
