import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';

import { blockRouterMetaData as blockRouterMetaDataEx2 } from './ExampleTest/router-data';

import { SelectorsAndCascadeRouterMetaData } from './SelectorsAndCascade/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  blockRouterMetaDataEx2,
  SelectorsAndCascadeRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
