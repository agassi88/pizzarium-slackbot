#!/bin/bash
# -*- mode: ruby -*-
# vi: set ft=ruby :
set -x	#echo on

sudo locale-gen utf-8
sudo timedatectl set-timezone Europe/Kiev
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install -y \
	mc \
	dos2unix \
	python-software-properties python g++ make
sudo add-apt-repository -y ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install -y \
	nodejs	\
	git
sudo git config --system user.name "Alexander Rudenko"
sudo git config --system user.email alexander.rudenko.work@gmail.com
sudo git config --system core.editor vim