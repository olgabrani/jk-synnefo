---
layout: post
title: Synnefo plugin for Thunderbird
author: Constantinos Venetsanopoulos
date: '2013-03-15T09:10:00.001-07:00'
tags: [news]
modified_time: '2013-03-15T09:13:09.627-07:00'
thumbnail: http://4.bp.blogspot.com/-I5WqdCCIK70/UUNHdqlGMwI/AAAAAAAAABI/p16yMyMN-2U/s72-c/okeanos-filelink-plugin-1.png
blogger_id: tag:blogger.com,1999:blog-8518489485419439663.post-4526936746659388714
blogger_orig_url: http://synnefo-software.blogspot.com/2013/03/synnefo-plugin-for-thunderbird.html
---

{% include lightbox-img.html img_name="okeanos-filelink-plugin-1.png" img_alt="Filelink plugin" %}
<!--break-->
Starting in version 13, [Thunderbird](https://www.mozilla.org/EN/thunderbird/) added support for online storage services through  [Filelink](https://support.mozillamessaging.com/en-US/kb/filelink-large-attachments). It allows you to upload attachments to an online storage service and then replaces the attachment in the message with a link. Filelink can be configured to use many of the well known storage services out there and it can now be configured to support Synnefo deployments, too.

We created the [~okeanos filelink plugin](https://addons.mozilla.org/addon/~okeanos-for-filelink/) for Thunderbird, to support our [~okeanos](https://okeanos.grnet.gr/) public cloud service. It uses the Astakos API for authenticating the user and the Pithos API for uploading and publishing the attachments. It is easy to use as it requires only the authentication token from the user. Also, it can be configured to support any Synnefo installation by specifying the correct Astakos and Pithos endpoint URLs.

Feel free to clone its [code](https://github.com/grnet/okeanos-filelink.git) and create your own Thunderbird plugin by only changing the endpoint URLs. You can then use it with your Synnefo powered cloud service. 


{% include lightbox-img.html img_name="okeanos-filelink-plugin-2.png" img_alt="Filelink plugin" %}
