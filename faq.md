---
layout: page
title: Faq
permalink: /faq/
backlink: /community/
layoutCls: centered
extraCls: js-faq
---

## General

Why are my VMs destroyed?

:   VMs on the Synnefo demo environment are destroyed after 3 hours.

## Network

How to connect to my new VM directly?

:       VMs on the  Synnefo demo environment use Network Address Translation(NAT) techniques to connect to the Internet, to save IPv4 addresses and maximize the number of supported VMs.

        Every VM gets an IP in the 192.168.0.0/16 range and has outbound network connectivity. For inbound connectivity, i.e., SSH and Remote Desktop access, each VM has a dedicated incoming port on 
   
            gate.demo.synnefo.org

        Specifically:

            IP: 192.168.x.y
            SSH port: 256*x + y + 10000
            RDP port: 256*x + y + 20000

        So to SSH to your machine with IP 192.168.4.15 you will need to run:

            $ x=4; y=15
            $ ssh -p $[10000 + 256*x + y] root@gate.demo.synnefo.org

        or just

            $ ssh -p 11039 root@gate.demo.synnefo.org

        You may need to replace **root** with **user** in the previous examples, depending on the type of your Linux VM.
         
How do VMs connect to the Internet?

:       At the moment, Synnefo demo environment VMs connect to the Internet over IPv4.
To allow for a very large number of VMs, the VMs connect to the Internet via a NAT router.
Check the previous question to learn how to connect to your VM directly.
        
        To prevent abuse, VMs may only establish outgoing connections to ports 80 and 443 (HTTP and HTTPS).
Every connection has a bandwidth cap.

        There is no IPv6 connectivity for the VMs, although the UI shows an IPv6 address for every VM. This is a known issue and will be rectified soon.




## Limits

How many VMs/Networks can I create?

:       The Synnefo demo environment is limited to 5 Virtual Machines and 5 Virtual Private Networks per user. When you try to create more you will get a server or network "Resource Limit Exceeded for your account" error message. For more information about your resources limits checkout the Usage page on your Dashboard. 

How much storage space can I use on Pithos?

:       The free trial is limited to 20GB of storage space per user.

"Resource Limit Exceeded for your account" ?

:       That means that you have reached the maximum amount of at least one of your resources. These resources are limited to 5 VMs, 5 Virtual Private Networks, 24 CPUs, 40GB RAM, 300GB System Disk and 20GB Pithos Storage per user.

Can I create a project?

:       Projects on Synnefo demo environment are aimed mainly towards internal testing and usage, so we do not approve individual project applications.

## Accounts

Where's my activation mail?

:       If you've just created a new account on demo.synnefo.org, you will be receiving an activation email at the email address you entered during registration. If 24 hours have passed and you still have not received your activation email, please check your spam folder; gmail in particular has the bad habit of classifying activation mails from demo.synnefo.org as spam. If you still can't find your activation email, please let us know at [synnefo@googlegroups.com](mailto:synnefo@googlegroups.com)

Can I use Academic login?

:       Academic / Shibboleth login is only enabled on demo.synnefo.org for internal use and testing. The Identity Providers (except for the GRNET IdP) haven't been configured to trust the demo.synnefo.org Service Provider, thus Academic login doesn't work for non-GRNET users. You can always use the Classic method to register, or the new registration methods using your Twitter or Google account.

