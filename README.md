# bullseye_tjandra_proxy

> Bullseye proxy server to display the team's components on one page:

## Related Projects

  - https://github.com/hrr40-fec1/item-checkout
  - https://github.com/hrr40-fec1/item-reviews
  - https://github.com/hrr40-fec1/item-details
  - https://github.com/hrr40-fec1/Images
  
### Installing Dependencies

From within the root directory:

```sh
npm install
```

### Building proxy

1. Run npm install/build for each component listed in related project
1. Configure AWS S3 and create a bucket to store webpacks and CSS files
1. Create aws-keys.json in config folder (example file provided)
1. Update bucket name inside of GruntFile.js
1. From within the root directory:

```sh
npm run build
```
