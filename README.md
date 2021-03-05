# 11ty

## Requirements :

### OVHCloud Power

https://labs.ovh.com/managed-nodejs


### Github Secrets :

```OVH_SSH_HOST``` : SSH hostname related to your OVHCloud Power hosting (Ex: ssh.clusterXXX.hosting.ovh.net)

```OVH_SSH_PORT``` : SSH hostname port related to your OVHCloud Power hosting (Ex: 22)

```OVH_SSH_USERNAME``` : SSH username related to your OVHCloud Power hosting (Ex: myusername)

```OVH_SSH_PASSWORD``` : SSH username password related to your Power hosting (Ex: myverycomplexpassword)

```OVH_WEBSITE_URL``` : HTTP URL of your OVHCloud Power hosting (Ex: http://mybeautifuldomain.ovh)

```OVH_WEBSITE_DOCUMENTROOT``` : Documentroot related to your OVHCloud Power hosting (Ex: www)

```OVH_WEBSITE_ENTRYPOINT``` : entrypoint related to your OVHCloud Power hosting (Ex: app.py)

```OVH_WEBSITE_PUBLICDIR``` : public directory related to your OVHCloud Power hosting (Ex: public)

![Alt Create GitHub secrets](img/create_secrets.gif)

## Run workflow
![Alt Run workflow](img/run_workflow.gif)

## Job is done

Go to OVH_WEBSITE_URL
