import gql from 'graphql-tag';

const assetsListQuery = gql`
        query assetsList {
          assets(orderBy: createdAt_DESC) {
            id,
            dosing,
            service,
            distance,
            cds,
            alert,
            name,
            operator,
            performance,
            level,
          }
        }
      `;
const CREATE_ASSET = gql`
        mutation createAsset($data: AssetCreateInput!) {
          createAsset(data: $data) {
            id,
            __typename,
            dosing,
            service,
            distance,
            cds,
            alert,
            name,
            operator,
            performance,
            level,
          }
        }
      `;

const DELETE_ASSET = gql`
          mutation deleteAsset($where: AssetWhereUniqueInput!) {
            deleteAsset(where: $where) {
              id,
            }
          }
      `;

export default {
  assetsListQuery,
  CREATE_ASSET,
  DELETE_ASSET,
};
